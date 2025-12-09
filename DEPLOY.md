# 🚀 Guía de Deploy en GitHub Pages

Esta guía te ayudará a desplegar tu aplicación CV Digital en GitHub Pages de forma automática.

## 📋 Prerrequisitos

1. Tener una cuenta de GitHub
2. Tener Node.js instalado (versión 20 o superior)
3. Tener Git instalado

## 🔧 Pasos para el Deploy

### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombra tu repositorio (ejemplo: `CV-digital-FLB`)
3. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)

### 2. Subir el Código a GitHub

Si aún no has inicializado Git en tu proyecto:

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: CV Digital Portfolio"

# Agregar el remoto de GitHub (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

Si ya tienes Git configurado:

```bash
git add .
git commit -m "Configurar deploy en GitHub Pages"
git push origin main
```

### 3. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 4. Verificar el Deploy

1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver un workflow ejecutándose llamado "Deploy to GitHub Pages"
3. Espera a que termine (puede tardar 1-2 minutos)
4. Una vez completado, verás un check verde ✅

### 5. Acceder a tu Sitio

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/TU_REPO/
```

Por ejemplo, si tu usuario es `felipe-lobo` y tu repo es `CV-digital-FLB`:
```
https://felipe-lobo.github.io/CV-digital-FLB/
```

## 🔄 Deploy Automático

Cada vez que hagas `git push` a la rama `main`, el sitio se actualizará automáticamente.

## 🐛 Solución de Problemas

### El sitio no carga correctamente

1. Verifica que el base path en `vite.config.ts` coincida con el nombre de tu repositorio
2. Revisa los logs en la pestaña **Actions** para ver errores
3. Asegúrate de que GitHub Pages esté habilitado en **Settings > Pages**

### Los assets no cargan

- Verifica que el base path esté configurado correctamente
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

### El workflow falla

1. Revisa los logs en **Actions**
2. Verifica que `package.json` tenga el script `build`
3. Asegúrate de que todas las dependencias estén en `package.json`

## 📝 Notas Importantes

- El primer deploy puede tardar más tiempo
- Los cambios pueden tardar 1-2 minutos en reflejarse después del deploy
- Si cambias el nombre del repositorio, actualiza el base path en `vite.config.ts`

## 🆘 Soporte

Si tienes problemas, revisa:
- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de GitHub Actions](https://docs.github.com/en/actions)
- Los logs en la pestaña **Actions** de tu repositorio

