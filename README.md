# CV Digital - Felipe Lobo Boric

Portfolio digital brutalista con CV interactivo. Constructor Civil UC especializado en transformación digital, gestión de proyectos y control documental.

## 🚀 Características

- **Diseño Neo-Brutalista**: Interfaz moderna y atrevida con bordes gruesos y sombras duras
- **CV Interactivo**: Descarga de CV en PDF con diseño profesional
- **Responsive**: Optimizado para todos los dispositivos
- **Stack Tecnológico**: React + TypeScript + Vite + Tailwind CSS

## 📦 Instalación Local

**Prerrequisitos:** Node.js 20+ y npm

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/CV-digital-FLB.git
   cd CV-digital-FLB
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

## 🏗️ Build para Producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

## 🌐 Deploy en GitHub Pages

### Configuración Automática (Recomendado)

1. **Habilitar GitHub Pages** en tu repositorio:
   - Ve a `Settings` > `Pages`
   - En `Source`, selecciona `GitHub Actions`

2. **Push al repositorio**:
   ```bash
   git add .
   git commit -m "Configurar deploy en GitHub Pages"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente** y desplegará la aplicación en:
   ```
   https://TU_USUARIO.github.io/CV-digital-FLB/
   ```

### Configuración Manual

Si prefieres desplegar manualmente:

1. Build del proyecto:
   ```bash
   npm run build
   ```

2. Configurar el base path en `vite.config.ts` según tu repositorio:
   - Si el repo es `TU_USUARIO/CV-digital-FLB`, el base será `/CV-digital-FLB/`
   - Si es el repo raíz del usuario, usar `/`

3. Subir la carpeta `dist/` a la rama `gh-pages`:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

## 📝 Estructura del Proyecto

```
CV-digital-FLB/
├── components/          # Componentes React
│   ├── Hero.tsx        # Sección principal
│   ├── Experience.tsx  # Experiencia profesional
│   ├── Education.tsx   # Formación académica
│   └── ...
├── utils/
│   └── generateCV.ts   # Generador de PDF
├── data/
│   └── profile.ts      # Datos del perfil
├── public/             # Assets estáticos
└── vite.config.ts      # Configuración de Vite
```

## 🛠️ Tecnologías

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Estilos utilitarios
- **jsPDF** - Generación de PDFs
- **FontAwesome** - Iconos

## 📄 Licencia

Este proyecto es de uso personal.

## 👤 Autor

**Felipe Lobo Boric**
- Constructor Civil UC
- LinkedIn: [felipealonsolobo](https://linkedin.com/in/felipealonsolobo)
- Email: felipealonso.lobo@gmail.com
