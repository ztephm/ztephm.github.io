import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'ea889122-e180-426d-9be1-086a8bc22008',
    clientToken: 'pub2e42182bf5a270da1f34684d13f32979',
    site: 'datadoghq.com',
    service:'easy-rum-starter-guide-npm',
    env:'staging-1',
    // Specify a version number to identify the deployed version of your application in Datadog 
    version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
}).then(console.log('rum init test'));
    
datadogRum.startSessionReplayRecording();