# LITE.SHOP React Project

**Live Demo:** https://HansMalm.github.io/Workshop13-ReactJS-Components-and-Props/

## Overview

This project is a React + TypeScript implementation of the LITE.SHOP product listing page.  
The original static HTML page was refactored into reusable React components with dynamic data passed through props.

## Components

### Navbar

I started working from the top by making the Navbar component including navbar and a header. The original section
contained both a navbar and a heading. So I decided to keep the original structure and did not add a separate hero banner.
I created the other components and moved each section of code to their respective components before making the
components able to show dynamic items. And added them to the App.tsx file so they can be rendered while I work with
making them dynamic. My Navbar component displays the logo, navigation links, status indicator, the search bar,
cart and user icons.

To make the Navbar items dynamic, I created the types "NavItem" and "NavbarProps". NavItem contains the strings "label" 
for the link text and "href" for the link destination. NavbarProps contains the array of NavItems and a string "title" 
to display the store name logo. The array of NavItems is iterated with the .map() method to create the links.
After making the component dynamic, I changed the svg icons to Lucide icons. I repeated this step with the other components 
after making them dynamic.

### MainContent

The section included the sidebar and the product grid. After I moved all the static content from the HTML file 
into the MainContent component, I created the Sidebar and ProductGrid components.
The MainContent component acts as a container that renders the Sidebar and ProductGrid components.

### Sidebar

The Sidebar contains the product categories, price range slider, availability filters and the promotional card.
I decided to keep the filter section and promo card static. It seemed that making them into components would add more complexity 
without much benefit at this stage. I updated the checkbox and range input to use defaultChecked and defaultValue so they
behaved correctly in React. The promo card would make a candidate for extraction because it is visually separate and could
be reused in other components.

### ProductGrid

First, I put all the static code, including the product cards, into the ProductGrid component.
The ProductGrid is responsible for storing the product data, displaying the section title, sorting dropdown, product layout, 
and pagination controls. Then I created the ProductCard component and moved the product card code into it. To make the 
product cards dynamic, I created the types "ProductItem" and "ProductItemProps". They will be explained in the ProductCard
component. ProductItem defines the structure of each product object, including the required product information and
optional styling values. The product array inside ProductGrid uses the ProductItem type and is rendered with
the .map() method.

### ProductCard

I created the ProductCard component by extracting the repeated product card HTML from the ProductGrid component.
Originally, all product cards were static content inside ProductGrid, but I moved the card structure into its own
reusable component and made the product information dynamic using props. ProductCard receives a product object through
the ProductItemProps prop, allowing the same component to display different products.

The ProductItem type was developed in stages. The initial variables were id, image, category, name, rating, oldPrice,
price, and stock, which contained the basic information needed to display each product. I later added optional variables 
to handle differences between products while keeping the same component structure.

The optional variables include badge and badgeClass for product labels such as "Discount" and "Sold Out",
imageClass for special image effects, stockClass for different availability message styling, priceClass for different
price appearances, and buttonClass and buttonText for product-specific button states. These variables allow products
with different conditions to share the same ProductCard component without creating separate components for each variation.

Props were used because they make the component reusable and keep the product data separate from the card layout.
ProductGrid creates the product objects and passes them to ProductCard using the .map() method, which renders
each product dynamically.

### Newsletter

I created the Newsletter and Footer components by extracting each section from the original HTML into a separate
React component. The Newsletter contains the promotional text, email input field, subscribe button, and decorative
background elements. Since the content and structure are static, I did not add props or TypeScript types for
this component. Since the newsletter text, styling, and layout will not change as frequently as products, I decided
to keep it as a static component.

### Footer

The Footer component contains the store branding, description, social media links, navigation columns, company information,
and copyright section. Since the footer content is rarely changed, I decided to not create
any props or TypeScript types for it.

## Props

Props are mainly used between Navbar, ProductGrid, and ProductCard.

App.tsx passes NavbarProps to the Navbar component. The props contain the store title and an array of navigation items.
ProductGrid passes a ProductItem object to ProductCard through the product prop. ProductCard uses this data to display
different products while keeping the same component structure. ProductItem contains the product information and optional
styling variables needed for different product states, such as discounts, sold-out products, and different button text.

Props were used to make components reusable and allow data to flow from parent components to child components.
Instead of creating separate components for every product or navigation item, the same component can receive different
data and render different content.