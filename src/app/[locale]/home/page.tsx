'use client'

import AppLayout from '@/components/layout/AppLayout'
import CreateProfessor from '@/components/modal/CreateProfessor'
import WindowModal from '@/components/modal/WindowModal'
import { Button } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <AppLayout>
      <WindowModal
        action={<Button>{t('Open Modal')}</Button>}
        modalBody={<CreateProfessor />}
      />
    </AppLayout>
  )
}
