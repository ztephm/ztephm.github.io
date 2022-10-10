import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '3fe58f5f-cd8a-484a-83cb-2b3097068fe5',
    clientToken: 'pub62acb5033b1befb9983ddfbcf5eba337',
    site: 'datadoghq.com',
    service:'easy-rum-starter-guide-npm',
    env:'staging-1',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();