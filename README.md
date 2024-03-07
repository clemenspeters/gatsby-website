# clemenspeters.de private website

## Local setup

```shell
yarn
yarn develop
yarn build
```

## Deploy

Upload content of `./public` folder to s3 bucket `clemenspeters.de`.

```shell
aws s3 sync ./public s3://clemenspeters.de --profile private
```
