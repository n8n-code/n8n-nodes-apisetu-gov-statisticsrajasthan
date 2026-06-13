import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovStatisticsrajasthanApi implements ICredentialType {
        name = 'N8nDevApisetuGovStatisticsrajasthanApi';

        displayName = 'Apisetu Gov Statisticsrajasthan API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovStatisticsrajasthan/apisetu-gov-statisticsrajasthan.svg', dark: 'file:../nodes/ApisetuGovStatisticsrajasthan/apisetu-gov-statisticsrajasthan.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/statisticsrajasthan/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/statisticsrajasthan/v3',
                        description: 'The base URL of your Apisetu Gov Statisticsrajasthan API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
