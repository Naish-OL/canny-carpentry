# Canny Carpentry - Project Setup & Customization Guide

## ✅ Project Status

Your Canny Carpentry Vue.js project is now fully customized with Chakra UI components!

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.vue          # Sticky header with navigation
│   ├── LandingPage.vue         # Hero section + features
│   ├── ECommerceSection.vue    # Product grid & shopping cart
│   ├── ContactSection.vue      # Contact form & information
│   ├── ProductCard.vue         # Reusable product card component
│   └── Footer.vue              # Footer with links & info
├── App.vue                     # Main app component
├── main.js                     # Vue + Chakra UI setup
└── style.css                   # Global styles
```

## 🚀 Available Features

### 1. **Navigation Bar**
- Sticky header that stays at the top while scrolling
- Desktop: Horizontal menu links
- Mobile: Hamburger menu with drawer (responsive)
- Quick access to all sections

### 2. **Landing Page**
- Hero section with gradient background
- Feature showcase (3 features in a grid)
- Call-to-action buttons directing to Shop and Contact
- Responsive design for all screen sizes

### 3. **E-Commerce Section**
- **Product Grid**: Displays 6 sample products
- **Category Filter**: Filter products by category (All, Furniture, Decor)
- **Product Cards**: Each card shows:
  - Product image (placeholder)
  - Category badge
  - Product name & description
  - Price
  - Stock status
  - Add to Cart button
- **Shopping Cart Drawer**:
  - Slide-out cart panel
  - View all items
  - Adjust quantities
  - Remove items
  - Cart total calculation
  - Checkout button (placeholder)

### 4. **Contact Section**
- **Two-column layout**: Contact info on left, form on right
- **Contact Information**: Email, phone, address, hours
- **Contact Form**: 
  - Name, email, phone, message fields
  - Form validation
  - Submit status feedback
  - Success message display
  - Responsive on mobile (single column)

### 5. **Footer**
- About section
- Quick links
- Contact information
- Copyright & legal links
- Responsive multi-column layout

## 🎨 Chakra UI Components Used

### Layout
- `CBox` - Container/wrapper
- `CContainer` - Responsive container
- `CFlex` - Flexbox layouts
- `CGrid` - Grid layouts
- `CStack`, `CVStack`, `CHStack` - Stack layouts

### Navigation & Interaction
- `CButton` - All buttons
- `CDrawer` - Mobile menu
- `CUseDisclosure` - Toggle state management

### Forms
- `CFormControl` - Form wrapper
- `CFormLabel` - Form labels
- `CInput` - Text inputs
- `CTextarea` - Textarea
- `CSelect` - Dropdown

### Visual Elements
- `CImage` - Images
- `CHeading` - Headings
- `CText` - Text content
- `CBadge` - Badges/labels
- `CAlert`, `CAlertIcon` - Alert messages
- `CDivider` - Dividers

## 🔧 How to Run

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Guide

### Adding New Products
Edit `src/components/ECommerceSection.vue` and add items to the `products` ref:

```javascript
const products = ref([
  {
    id: 7,
    name: 'Your Product Name',
    description: 'Product description',
    price: 999.99,
    category: 'Your Category',
    image: 'https://your-image-url.jpg',
    inStock: true
  },
  // ... more products
])
```

### Customizing Colors
The project uses Chakra UI's purple theme (`purple.600`). To change colors, update component props:

```vue
<CButton bg="purple.600">  <!-- Change purple.600 to your color -->
```

Chakra UI color options: `gray`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `cyan`, `purple`, `pink`

### Updating Business Information
- **Contact Section**: Edit email, phone, address, hours in `ContactSection.vue`
- **Footer**: Update company info, links in `Footer.vue`
- **Navigation**: Modify logo/branding in `Navigation.vue`

### Adding New Sections
Create new `.vue` files in `/src/components/` and import them in `App.vue`:

```vue
<script setup>
import MyNewSection from './components/MyNewSection.vue'
</script>

<template>
  <MyNewSection />
</template>
```

## 🎯 Next Steps

1. **Replace placeholder images**: Update product images in `ECommerceSection.vue`
2. **Integrate backend**: Connect contact form and cart to your API
3. **Add routing**: Install Vue Router for separate pages if needed
4. **Implement payment**: Add payment gateway for checkout
5. **Add more products**: Populate with real product data
6. **Customize styling**: Adjust colors, spacing, and fonts to match brand

## ⚠️ Important Notes for Copilot

When making changes to this project:
- **ALWAYS use Chakra UI components** - Never use raw HTML or CSS Grid for layout
- **Maintain consistency** - Follow the same component patterns across files
- **Keep responsive** - Use array syntax for responsive values: `[:md, :lg]`
- **Use theme colors** - Stick to Chakra UI's color system
- **Follow spacing** - Use Chakra UI's spacing tokens (2, 4, 6, 8, etc.)

---

**Project Setup Date**: April 20, 2026
**Framework**: Vue 3 + Vite + Chakra UI
