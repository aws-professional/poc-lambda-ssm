# PoC Lambda SSM
Simple AWS Lambda project to show how to fetch a parameters from ssm.

## Configuring ssm
Just find on AWS console the service called **AWS Systems Manager**, roll down the left panel until you find **Parameter Store**.

Click on create parameter and fill the form:
* **Name**: my-secure-param
* **Type**: SecureString
* **Value**: secret

## Building the project
Since this project use **serverless** framework, you should install serverless by running the following command as root:

    # npm -g i serverless

install the npm dependencies:
    
    $ npm install

deploy your package:

    $ sls deploy
    
## Invoke the function
invoke the function in terminal using the command:

    $ sls invoke -f hello_ssm
