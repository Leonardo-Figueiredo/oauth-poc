'use client'

type IUGUUtil = {
  setAccountID(account_id: string): void
  setTestMode(enable: boolean): void
  setup(): void
  createPaymentToken(this: any, fc: any): void
  CreditCard(
    cardnumber: string,
    month: string,
    year: string,
    name: string,
    lastname: string,
    cvv: string
  ): void

  utils: {
    validateCreditCardNumber(ccnumber: string): boolean
    validateCVV(ccnumber: string): boolean
    validateExpiration(month: number, year: number): boolean
    validateExpirationString(date: string): boolean
    getBrandByCreditCardNumber(ccnumber: string): string | boolean
  }
}

export function useIUGU(): IUGUUtil  {
  if (typeof window === 'undefined') return {} as  IUGUUtil

  const newWindow = window as any
  const IUGU: IUGUUtil = newWindow.Iugu

  return IUGU
}
