# Assets Folder Structure

This folder contains all static assets for the Flaha Creative website.

## Folder Structure

```
src/assets/
├── images/
│   ├── logo/           # Logo files (SVG, PNG)
│   ├── banner/         # Hero banner/carousel images
│   └── gallery/        # Portfolio and gallery images
│       ├── portrait/   # Portrait photography
│       ├── wedding/    # Wedding photography
│       ├── event/      # Event photography
│       └── commercial/ # Commercial photography
├── icons/              # Icons and SVG files
├── fonts/              # Custom fonts (if needed)
└── README.md          # This documentation
```

## Image Specifications

### Logo Files
- **Format**: SVG (preferred), PNG with transparent background
- **Variants**: Main logo, white version, dark version, icon only
- **Naming**: `logo-main.svg`, `logo-white.svg`, `logo-dark.svg`, `logo-icon.svg`

### Banner Images
- **Resolution**: 1920x800px (2.4:1 aspect ratio)
- **Format**: JPG or WebP
- **File Size**: Max 500KB per image
- **Quality**: High (80-90%)
- **Naming**: `banner-01-photography.jpg`, `banner-02-wedding.jpg`, etc.

### Gallery Images
- **Resolution**: Various sizes (maintain aspect ratio)
- **Format**: JPG or WebP
- **File Size**: Max 300KB per image
- **Quality**: High (80-90%)
- **Naming**: `portrait-001.jpg`, `wedding-ceremony-001.jpg`, etc.

### Icons
- **Format**: SVG (preferred) or PNG
- **Sizes**: 16x16, 24x24, 32x32, 48x48px
- **Style**: Consistent with brand guidelines
- **Naming**: `icon-camera.svg`, `icon-phone.svg`, etc.

## Usage in Components

### Importing Images
```javascript
// For static images
import logo from '@/assets/images/logo/logo-main.svg'
import bannerImage from '@/assets/images/banner/banner-01-photography.jpg'

// For dynamic imports
const imagePath = '/assets/images/gallery/portrait/portrait-001.jpg'
```

### Best Practices
1. **Optimize images** before adding to assets
2. **Use WebP format** when possible for better compression
3. **Maintain consistent naming** conventions
4. **Keep file sizes small** for better performance
5. **Use SVG for icons** and logos when possible
6. **Organize by category** and purpose

## File Naming Conventions

- Use lowercase letters
- Use hyphens (-) instead of spaces or underscores
- Include descriptive names
- Add numbers for sequences (001, 002, etc.)
- Include category prefixes when helpful

Examples:
- `logo-main.svg`
- `banner-01-photography.jpg`
- `portrait-headshot-001.jpg`
- `icon-social-instagram.svg`