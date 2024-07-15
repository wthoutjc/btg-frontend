# BTG Pactual - Frontend

Bienvenido al repositorio del frontend de BTG Pactual. Este proyecto utiliza React y Vite para proporcionar una experiencia de usuario rápida y eficiente. A continuación, encontrarás las instrucciones para configurar y ejecutar el proyecto localmente, así como para desplegarlo en AWS utilizando AWS CodePipeline, AWS S3, AWS CloudFormation y AWS IAM.

## Tabla de Contenidos

- [Instalación Local](#instalación-local)
- [Despliegue en AWS](#despliegue-en-aws)
  - [Configuración de AWS IAM](#configuración-de-aws-iam)
  - [Configuración de AWS S3](#configuración-de-aws-s3)
  - [Configuración de AWS CodePipeline y AWS CodeBuild](#configuración-de-aws-codepipeline-y-aws-codebuild)

## Instalación Local

Sigue estos pasos para configurar y ejecutar el proyecto localmente en tu máquina:

### Prerrequisitos

- [Node.js](https://nodejs.org/) v17.9.1 o superior
- [npm](https://www.npmjs.com/) v8.11.0 o superior
- [Git](https://git-scm.com/)

### Clonar el Repositorio

```bash
git clone https://github.com/wthoutjc/btg-frontend.git
cd btg-pactual-frontend
```

### Instalar dependencias

```bash
npm install
```

### Configurar Variables de Entorno

Crea un archivo `.env` en el directorio raíz del proyecto con las siguientes variables:

```plaintext
VITE_BACKEND_URL=$URL
```

### Ejecutar el Proyecto

```bash
npm run dev
```

El proyecto debería estar disponible en http://localhost:3000.

## Despliegue en AWS

Para desplegar este proyecto en AWS, utilizaremos varios servicios de AWS: IAM, S3, CodePipeline, CodeBuild y CloudFormation.

### Configuración de AWS IAM

1. Crear Roles y Políticas

Crea un rol para CodeBuild y adjunta las siguientes políticas:

#### Política de S3:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": ["arn:aws:s3:::...", "arn:aws:s3:::.../*"]
    }
  ]
}
```

#### Política de Secrets Manager:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "secretsmanager:GetSecretValue",
      "Resource": "arn:aws:secretsmanager:..."
    }
  ]
}
```

### Configuración de AWS S3

1. **Crear un Bucket S3**

Ve a la consola de S3 y crea un nuevo bucket llamado `your-bucket`.

2. **Configurar el Alojamiento de Sitios Web Estáticos**

- Index document: index.html
- Error document: index.html

3.  **Establecer Políticas del Bucket**

Aplica la política de acceso público adecuada:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::btg-frontend-bucket/*"
    }
  ]
}
```

### Configuración de AWS CodePipeline y AWS CodeBuild

1. **Crear un Proyecto de CodeBuild**

Usa la consola de CodeBuild para crear un nuevo proyecto con los siguientes ajustes:

- Fuente: GitHub
- Comandos de construcción: Utiliza el archivo buildspec.yml en tu repositorio.

2. **Configurar CodePipeline**

- Crear un Pipeline: Usa la consola de CodePipeline para crear un nuevo pipeline que incluya los siguientes pasos:

* Fuente: GitHub
* Construcción: CodeBuild
