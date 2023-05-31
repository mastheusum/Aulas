# Introdução ao React Native

# Preparando o ambiente
Tenha o Node instalado na versão LTS e para os comandos dados a seguir utilize o **Prompt de Comando**.

É possível rodar a aplicação tanto no emulador do Android Studio quanto no celular. Isso pode ser decidido quando for rodar a aplicação. No nosso caso utilizaremos o celular então instale o app **Expo Go**

Para fazer isto utilizando o celular basta utilizar-mos o **expo**, elemento que simplifica muito a criação do app

Para criar um projeto com React Native utilize o comando

```
npx create-expo-app meu-primeiro-app --template blank
```

Este comando irá instalar os arquivos necessários para a criação de um projeto juntamente com um template em branco e então criar o projeto com o nome dado, após isto ele irá dar instruções de como iniciar a aplicação.

Para iniciar é preciso entrar na pasta e utilizar o comando de iniciar como abaixo

```
cd meu-primeiro-app
npx expo start
```

Após usados ambos os comandos um QR Code irá aparecer no prompt. Utilize este QR Code no app **Expo Go** e então sua aplicação será baixada e irá rodar no seu celular.