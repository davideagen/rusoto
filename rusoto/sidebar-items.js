initSidebarItems({"enum":[["Region","An AWS region. `CnNorth1` is currently untested due to Rusoto maintainers not having access to AWS China."]],"mod":[["acm","AWS Certificate Manager"],["cloudhsm","AWS CloudHSM"],["cloudtrail","AWS CloudTrail"],["codecommit","AWS CodeCommit"],["codedeploy","AWS CodeDeploy"],["codepipeline","AWS CodePipeline"],["cognitoidentity","AWS Cognito Identity"],["config","AWS Config"],["datapipeline","AWS Data Pipeline"],["devicefarm","AWS Device Farm"],["directconnect","AWS Direct Connect"],["ds","AWS Directory Service"],["dynamodb","Amazon DynamoDB"],["dynamodbstreams","AWS DynamoDB Streams"],["ec2","Amazon EC2 Container Service"],["ecr","Amazon EC2 Container Registry"],["ecs","Amazon EC2 Container Service"],["elastictranscoder","Amazon Elastic Transcoder"],["emr","Amazon Elastic MapReduce"],["events","Amazon CloudWatch Events"],["firehose","Amazon Kinesis Firehose"],["inspector","Amazon Inspector"],["iot","Amazon IoT"],["kinesis","Amazon Kinesis"],["kms","AWS Key Management Service"],["logs","Amazon CloudWatch Logs"],["machinelearning","Amazon Machine Learning"],["marketplacecommerceanalytics","Amazon Marketplace Commerce Analytics"],["opsworks","AWS OpsWorks"],["route53domains","AWS Route 53 Domains"],["s3","The AWS S3 API."],["sqs","The AWS SQS API."],["ssm","Amazon EC2 Simple Systems Manager"],["storagegateway","Amazon Storage Gateway"],["swf","Amazon Simple Workflow Service"],["waf","AWS Web Application Firewall"],["workspaces","Amazon Workspaces"]],"struct":[["AwsCredentials","AWS API access credentials, including access key, secret key, token (for IAM profiles), and expiration timestamp."],["ChainProvider","Provides AWS credentials from multiple possible sources using a priority order."],["CredentialsError",""],["EnvironmentProvider","Provides AWS credentials from environment variables."],["HttpDispatchError",""],["HttpResponse",""],["IamProvider","Provides AWS credentials from a resource's IAM role."],["ParseRegionError","An error produced when attempting to convert a `str` into a `Region` fails."],["ProfileProvider","Provides AWS credentials from a profile in a credentials file."],["SignedRequest","A data structure for all the elements of an HTTP request that are involved in the Amazon Signature Version 4 signing process"]],"trait":[["DispatchSignedRequest",""],["ProvideAwsCredentials","A trait for types that produce `AwsCredentials`."]],"type":[["DefaultCredentialsProvider","The credentials provider you probably want to use if you don't require Sync for your AWS services. Wraps a `ChainProvider` in an `AutoRefreshingProvider` that uses a `RefCell` to cache credentials"],["DefaultCredentialsProviderSync","The credentials provider you probably want to use if you do require your AWS services. Wraps a `ChainProvider` in an `AutoRefreshingProvider` that uses a `Mutex` to lock credentials in a threadsafe manner."]]});