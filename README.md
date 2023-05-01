# portfolio-nextjs

yarn dev
 
## updating strapi

FUTURE ME, THINK ABOUT THE SQLITE DB, WILL THIS OVERWRITE THE DATA? 

run yarn develop, make the changes then create a new docker image

docker build -t strapi-portfolio:{tag}

upload to ECR: 

docker tag strapi-portfolio:{tag} {ecr.url}:{tag}/strapi-portfolio:{tag}

docker push {ecr.url}/strapi-portfolio:{tag}

SSH to instance

remove old containers:  docker rm -f $(docker ps -a -q)

docker run --name strapi-portfolio  --env-file .env -p 443:1337 -p 80:1337 274221707448.dkr.ecr.us-east-1.amazonaws.com/portfolio:v1