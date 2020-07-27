FROM ubuntu:bionic
MAINTAINER Ben West <bewest@gmail.com>

ENV DEBIAN_FRONTEND noninteractive
ENV PORT=3003

RUN apt-get update -y
RUN apt-get install -y wget curl git sudo
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

RUN apt-get update
RUN apt-get install -y python software-properties-common nodejs build-essential nginx ruby vim
RUN npm install -g n
RUN n 12.16.2
RUN n prune

ADD . /app

WORKDIR /app
RUN npm install -g json


RUN rm -rf node_modules && npm install

EXPOSE 3003

CMD /app/start_container.sh
