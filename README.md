# AI Customer Support MVP


- [/] Complete a basic Next.js application setup
- [ ] Set up AWS and OpenAI with the right credentials eventaully


STRUCTURE
```
ai-customer-support/
│
├── node_modules/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts
│   │   │
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── ChatInterface.tsx
│   │   ├── Loading.tsx
│   │   ├── MessageDisplay.tsx
│   │   └── MessageInput.tsx
│   │
│   ├── lib/
│   │   ├── aws-config.ts
│   │   └── openai-config.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── types/
│   │   └── index.ts
│
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```