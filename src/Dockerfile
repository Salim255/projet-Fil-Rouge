#1 FROM will allow us to build my image on an other base image
FROM node

#2, workdir, to inform RUN command that our working directory is app, not root
WORKDIR /app

#3To tell docker which files from our local machine should go into the image

#COPY  . .
#COPY  . ./
COPY  . /app

#First (. , source) is the  path outside of the container where the files should be copied into the image
#Second (., des) it is the path into the container where files come from first . should be stored
#But is good practice to don't send the files from my local machine to the root folder of my image, instead we use /app, so we know where files been copied and this folder app will be created if it doesnt exist yet

#3 we want to run npm install or any other command
RUN npm install

##To tell docker when this container started we want to expose certains port to our local system
EXPOSE 80

##CMD will not while creating the image, but while the container has started
CMD [ "node", "server.js" ]