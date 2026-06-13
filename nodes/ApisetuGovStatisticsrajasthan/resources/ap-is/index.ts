import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "Btcer",
					"value": "Btcer",
					"action": "Birth Certificate",
					"description": "API to verify Birth Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/btcer/certificate"
						}
					}
				},
				{
					"name": "Dtcer",
					"value": "Dtcer",
					"action": "Death Certificate",
					"description": "API to verify Death Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dtcer/certificate"
						}
					}
				},
				{
					"name": "Rmcer",
					"value": "Rmcer",
					"action": "Marriage Certificate",
					"description": "API to verify Marriage Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rmcer/certificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /btcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Cert_Type\": \"Birth_Certificate,Still_Birth_Certificate\",\n  \"DateofEvent\": \"dd-mm-yyyy\",\n  \"RegisNumber\": \"081290010000006003XX\",\n  \"Year\": \"2015,2016,2017,2018,2019,2020\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Btcer"
					]
				}
			}
		},
		{
			"displayName": "POST /dtcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"DateofEvent\": \"dd-mm-yyyy\",\n  \"RegisNumber\": \"081290010000006003XX\",\n  \"Year\": \"2015,2016,2017,2018,2019,2020\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dtcer"
					]
				}
			}
		},
		{
			"displayName": "POST /rmcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"DateofEvent\": \"dd-mm-yyyy\",\n  \"RegisNumber\": \"081290010000006003XX\",\n  \"Year\": \"2015,2016,2017,2018,2019,2020\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
];
