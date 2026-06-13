import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovStatisticsrajasthan implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apisetu Gov Statisticsrajasthan',
                name: 'N8nDevApisetuGovStatisticsrajasthan',
                icon: { light: 'file:./apisetu-gov-statisticsrajasthan.svg', dark: 'file:./apisetu-gov-statisticsrajasthan.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'DigiLocker integrates Department-issued birth, still-birth, death, and marriage certificates from 2014 onward.',
                defaults: { name: 'Apisetu Gov Statisticsrajasthan' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApisetuGovStatisticsrajasthanApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
                ],
        };
}
