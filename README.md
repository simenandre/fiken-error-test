# How do Fiken-errors look like?

This repository is used to get error messages, to learn how they look like.

## Quickstart

Get your personal Folio API key and the company slug, add it to a `.env` file, like so:

```
FIKEN_API_TOKEN=your-key
FIKEN_COMPANY_SLUG=fiken-demo-company
```

Go to `src/index.ts` to force errors, so we can learn more.

## Errors found thus far

```typescript
await f.createBankAccount({
  companySlug: COMPANY_SLUG,
  bankAccountRequest: {} as BankAccountRequest,
});
```

↓

```json
[
  {
    "logref": "ad834767-c679-4635-a59e-beb4aefd00f3",
    "message": "Feil ved validering av data: 'bankAccountNumber' er påkrevd. 'type' er påkrevd. 'name' er påkrevd. "
  }
]
```
