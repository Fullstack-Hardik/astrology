# Astrology E-Commerce Platform - Project Plan

## 1. Project Vision
A modern, secure, scalable Astrology E-Commerce platform.
Features include browsing products, product details, search/filter, cart, wishlist, registration/login (Google Auth), order placement/tracking, and profile management.
An Admin system for managing products, inventory, categories, users, orders, and content.

## 2. Technology Stack
**Frontend:**
- React (Vite)
- Tailwind CSS
- Component-based architecture
- Centralized state management
- Form validation

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- REST API architecture
- Authentication/Authorization system
- Security middleware (Helmet, CORS, Rate Limiting)
- Centralized error handling and logging

## 3. Folder Architecture
```text
project-root/
├── client/          # React frontend
├── server/          # Express backend
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validators/
│   └── app.js
├── docs/            # Project documentation
├── .gitignore
└── README.md
```

## 4. Database Architecture (MongoDB)
Collections:
- `users`: Core user accounts and roles.
- `products`: Product details, variants, SEO, and astrology-specific metadata.
- `categories`: Hierarchical category structure.
- `orders`, `orderItems`, `carts`, `wishlists`
- `reviews`, `addresses`, `coupons`, `payments`, `inventory`
- `auditLogs`, `notifications`

## 5. Authentication Architecture
- Initial Support: Google Authentication (OAuth).
- Verified server-side. No blind trust of client-provided identities.
- Secure session/token mechanisms.
- Architecture supports future additions (Email/Password, GitHub, OTP).

## 6. Authorization Architecture
- Role-based authorization (`USER`, `ADMIN`, `SUPER_ADMIN`).
- Backend verifies authentication, authorization, and specific operation permissions.
- Never rely solely on frontend route hiding.

## 7. Security Architecture
- Input validation and sanitization.
- Rate limiting and API abuse prevention.
- CORS configuration, CSRF protection, secure HTTP headers.
- Password hashing and secure token mechanisms.
- Protection against NoSQL injection, XSS, and malicious file uploads.
- Secure environment variables.
- Audit logging for admin actions.

## 8. API Architecture
Consistent JSON responses.
Success Example:
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```
Error Example:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Error details"
  }
}
```

## 9. Product Architecture
Supports CRUD operations protected by admin authorization.
Fields: Name, Slug, Description, Images, Price, Discount, SKU, Stock, Tags, SEO details.
Astrology specifics: Zodiac compatibility, planet/nakshatra association, elements, usage instructions, spiritual significance.

## 10. Admin Architecture
Secure admin login, role verification, rate limiting, and audit logs.
Dashboards, product/category management, order processing, and user management.

## 11. Order Architecture
Controlled state machine for order status:
`PENDING -> CONFIRMED -> PROCESSING -> SHIPPED -> OUT_FOR_DELIVERY -> DELIVERED`
Valid transitions enforced server-side.

## 12. Payment Architecture
Server-side verification using provider webhooks (authenticity/signatures verified).
Never store raw card information or trust frontend success responses blindly.

## 13. SEO Architecture
SEO-friendly URLs, Meta tags, Canonical URLs, Sitemap, Open Graph, Twitter metadata, and structured schema (Product, Organization, FAQ).

## 14. Testing Strategy
- **Unit tests:** Utilities, validation, business logic.
- **Integration tests:** Authentication, APIs, DB interactions.
- **E2E tests:** Login, browsing, checkout, admin workflows.

## 15. Deployment Strategy
To be defined (Phase 10). Will include environment configuration, monitoring, logging, and CI/CD pipelines.

## 16. Environment Variables
- `DATABASE_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `JWT_SECRET`
- `CLIENT_URL` / `API_URL`
(No secrets committed to Git).

## 17. Development Rules
- Do not break existing working functionality.
- Do not duplicate code.
- Do not create giant files or controllers.
- Separate business logic from routes and database queries from components.
- Do not trust client-side authorization.

## 18. Future Roadmap & Development Phases
- **Phase 0:** Foundation (Current) - Project setup, Hero Section integration.
- **Phase 1:** Core Backend (Express, MongoDB, config, validation, error handling).
- **Phase 2:** Authentication (Google Auth, User Model).
- **Phase 3:** Product System (Models, CRUD, inventory).
- **Phase 4:** Storefront (Listings, details, search, UI).
- **Phase 5:** Cart & Wishlist.
- **Phase 6:** Checkout (Orders, payments).
- **Phase 7:** Admin Panel.
- **Phase 8:** SEO & Content (Blogs, astrology content).
- **Phase 9:** Testing & Security Audit.
- **Phase 10:** Production Deployment.
