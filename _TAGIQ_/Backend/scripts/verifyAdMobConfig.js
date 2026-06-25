const { sequelize } = require('../config/database');

async function verifyAdMobConfig() {
  try {
    console.log('🔍 Verifying AdMobConfig table structure and data...');
    
    // Check table structure
    const [columns] = await sequelize.query(`
      DESCRIBE admob_configs
    `);
    
    console.log('📊 Table structure:');
    columns.forEach(col => {
      console.log(`  - ${col.Field}: ${col.Type} ${col.Null === 'NO' ? '(NOT NULL)' : ''} ${col.Key === 'PRI' ? '(PRIMARY)' : ''} ${col.Key === 'UNI' ? '(UNIQUE)' : ''}`);
    });
    
    // Check data
    const [data] = await sequelize.query(`
      SELECT environment, banner, interstitial, appOpen, globalConfig, notes, created_at, updated_at 
      FROM admob_configs 
      ORDER BY environment
    `);
    
    console.log(`\n📊 Found ${data.length} environment configurations:`);
    
    data.forEach(row => {
      try {
        const banner = JSON.parse(row.banner || '{}');
        const interstitial = JSON.parse(row.interstitial || '{}');
        const appOpen = JSON.parse(row.appOpen || '{}');
        const globalConfig = JSON.parse(row.globalConfig || '{}');
        
        console.log(`\n  🌍 ${row.environment.toUpperCase()} ENVIRONMENT:`);
        console.log(`    📱 Banner: ${banner.enabled ? '✅' : '❌'} (${banner.adUnitId || 'N/A'})`);
        console.log(`    📺 Interstitial: ${interstitial.enabled ? '✅' : '❌'} (${interstitial.adUnitId || 'N/A'})`);
        console.log(`    🚀 AppOpen: ${appOpen.enabled ? '✅' : '❌'} (${appOpen.adUnitId || 'N/A'})`);
        console.log(`    🧪 Test Mode: ${globalConfig.testMode ? '✅' : '❌'}`);
        console.log(`    📝 Notes: ${row.notes || 'No notes'}`);
        console.log(`    📅 Created: ${row.created_at}`);
        console.log(`    🔄 Updated: ${row.updated_at}`);
        
        // Show additional details for test environment
        if (row.environment === 'test') {
          console.log(`    🔍 Test Details:`);
          console.log(`      - Banner Position: ${banner.position || 'N/A'}`);
          console.log(`      - Interstitial Min Interval: ${interstitial.minInterval || 'N/A'}s`);
          console.log(`      - AppOpen Max Shows/Day: ${appOpen.maxShowsPerDay || 'N/A'}`);
          console.log(`      - Global Cooldown: ${globalConfig.cooldownPeriod || 'N/A'}s`);
        }
        
        // Show warnings for production environment
        if (row.environment === 'production') {
          const hasPlaceholderIds = banner.adUnitId?.includes('YOUR_PRODUCTION') || 
                                   interstitial.adUnitId?.includes('YOUR_PRODUCTION') ||
                                   appOpen.adUnitId?.includes('YOUR_PRODUCTION');
          
          if (hasPlaceholderIds) {
            console.log(`    ⚠️  WARNING: Production environment has placeholder ad unit IDs!`);
            console.log(`       Update with real production ad unit IDs before going live.`);
          }
        }
        
      } catch (parseError) {
        console.log(`  ❌ Error parsing JSON data for ${row.environment}: ${parseError.message}`);
      }
    });
    
    // Check for any issues
    const [testData] = await sequelize.query(`
      SELECT COUNT(*) as count FROM admob_configs WHERE environment = 'test'
    `);
    
    const [prodData] = await sequelize.query(`
      SELECT COUNT(*) as count FROM admob_configs WHERE environment = 'production'
    `);
    
    const [stagingData] = await sequelize.query(`
      SELECT COUNT(*) as count FROM admob_configs WHERE environment = 'staging'
    `);
    
    console.log('\n📈 Environment Summary:');
    console.log(`  - Test: ${testData[0].count} configuration(s)`);
    console.log(`  - Production: ${prodData[0].count} configuration(s)`);
    console.log(`  - Staging: ${stagingData[0].count} configuration(s)`);
    
    if (testData[0].count > 0 && prodData[0].count > 0 && stagingData[0].count > 0) {
      console.log('\n✅ All environments are configured!');
    } else {
      console.log('\n⚠️  Some environments are missing configurations.');
    }
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
    console.error('Stack trace:', error.stack);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
}

verifyAdMobConfig(); 