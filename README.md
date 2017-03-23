# Locadora de veículos com VRaptor 4 e Angular 2

## Necessário

Deve estar instalado [Java](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), [Maven](https://maven.apache.org/download.cgi), [Tomcat](https://tomcat.apache.org/download-80.cgi), [Node JS](https://nodejs.org/en/download/) e [Git](https://git-scm.com/download/win).

## Compilar o Back-end

Abra o prompt de comando na pasta "locadora-back" do projeto e execute:

```
mvn clean package
```

## Iniciar o Back-end

Copiar o arquivo ".war" para a pasta de deploy do Tomcat e iniciar o servidor.


## Compilar o Front-end

Abra o prompt de comando na pasta "locadora-front" do projeto e execute:

```
npm install
npm start
```

## Iniciar o Front-end

Acessar http://localhost:3000 para ver o resultado.