import { useEffect } from 'react'

export default function useDocumentTitle(title) {
  useEffect(() => {
    console.log(title)
    document.title = title
  })
}
