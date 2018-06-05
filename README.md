Using AWS SAM framework deploy Lambda function.
==================================================

Change bucket name in example.yaml file

==========================================
Create package using command -

sam package \
   --profile <Profile_name> \       #optional_step
   --template-file /<folder_location>/example.yaml \
   --output-template-file serverless-output.yaml \
   --s3-bucket <Bucket_name>



or-:
sam package --profile <Profile_name> --template-file <folder_location>/example.yaml --output-template-file serverless-output.yaml --s3-bucket <Bucket_name>

#--profile <Profile_name>  optional step
==========================================

Deploy new code -

sam deploy \
   --profile qa \                  #optional_step
   --template-file serverless-output.yaml \
   --stack-name <Stack_name> \
   --capabilities CAPABILITY_IAM


or:-
sam deploy  --profile <Profile_name> --template-file serverless-output.yaml --stack-name <Stack_name> --capabilities CAPABILITY_IAM
#--profile <Profile_name>  optional step
============================================

Verification using API -
Go to AWS API Gateway option select stack and get the <API_link>/hello
