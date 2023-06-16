# portfolio-nextjs

yarn dev
 
## updating strapi

run yarn develop, make the changes then create a new docker image

docker build -t strapi-portfolio:{tag} . 

upload to ECR: 

if login fails:
aws ecr get-login-password | docker login --username AWS --password-stdin <AWS_ACCOUNT_NO>.dkr.ecr.<AWS_REGION_NAME>.amazonaws.com
aws ecr get-login-password | docker login --username AWS --password-stdin 274221707448.dkr.ecr.us-east-1.amazonaws.com

docker tag strapi-portfolio:{tag} {ecr.url}:{tag}/portfolio:{tag}
docker tag strapi-portfolio:v3 274221707448.dkr.ecr.us-east-1.amazonaws.com/portfolio:v3

docker push {ecr.url}/strapi-portfolio:{tag}
docker push 274221707448.dkr.ecr.us-east-1.amazonaws.com/portfolio:v3

SSH to instance

remove old containers:  docker rm -f $(docker ps -a -q)

docker run --name strapi-portfolio  --env-file .env -p 443:1337 -p 80:1337 {ecr.url}:{tag}/portfolio:{tag}
docker run --name strapi-portfolio  --env-file .env -p 443:1337 -p 80:1337 274221707448.dkr.ecr.us-east-1.amazonaws.com/portfolio:v3
