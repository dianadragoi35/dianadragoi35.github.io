## Build container image

```
docker build -t my-app .
```

## Run docker container
```
docker run -p 80:80 -v $(pwd):/var/www/html my-app
```