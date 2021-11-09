export interface QrReaderProps {
  setButtonUseQr: (qr: boolean) => void
  separator: string
  eanIndex: number
  action: string
  mode: string
}

export interface BarcodeReaderProps {
  setButtonUseBarcode: (barcode: boolean) => void
  action: string
  mode: string
}

export interface SkuDataType {
  Id: string
  NameComplete: string
  DetailUrl: string
}

export type UseEanType = 'qr' | 'barcode'

export interface UseEanProps {
  setButton: (button: boolean) => void
  setUse: (code: boolean) => void
  ean: string
  type: UseEanType
  mode: string
  setState: (state: string) => void
  setModalShows: (modal: boolean) => void
}

export type ModalType = 'success' | 'error' | 'errorMultipleProduct'

export interface ListMultipleProduct {
  productName: string
  productLink: string
}

export interface OrderFormContext {
  loading: boolean
  orderForm: OrderFormType | undefined
  setOrderForm: (orderForm: Partial<OrderFormType>) => void
}
