import * as fiken from 'fiken';
import * as dotenv from 'dotenv';
import { BankAccountRequest } from 'fiken';
dotenv.config();

const TOKEN = process.env.FIKEN_API_TOKEN as string;
const COMPANY_SLUG = process.env.FIKEN_COMPANY_SLUG as string;

const main = async () => {
  const f = new fiken.BankAccountsApi(
    new fiken.Configuration({
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
  );

  await f.createBankAccount({
    companySlug: COMPANY_SLUG,
    bankAccountRequest: {} as BankAccountRequest,
  });
};

main().catch((e) => {
  const err = async () => {
    console.log(await e.text());
  };

  err();
});