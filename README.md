Using AWS SAM framework deploy Lambda function.
==================================================

Change bucket name in example.yaml file

==========================================
Create package using command -

sam package \
   --profile <Profile_name> \       #optional step
   --template-file /<folder_location>/example.yaml \
   --output-template-file serverless-output.yaml \
   --s3-bucket <Bucket_name>

==========================================

Deploy new code -

sam deploy \
   --profile qa \                  #optional step
   --template-file serverless-output.yaml \
   --stack-name <Stack_name> \
   --capabilities CAPABILITY_IAM

============================================

Verification using API -
Go to AWS API Gateway option select stack and get the <API_link>/hello
