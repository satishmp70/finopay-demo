import { ref, computed } from 'vue'

export function useMoneyTransfer() {
  // Form data
  const recipientName = ref('')
  const recipientMobile = ref('')
  const accountNumber = ref('')
  const confirmAccount = ref('')
  const ifscCode = ref('')
  const bankName = ref('')
  const transferAmount = ref<number | null>(null)
  const purpose = ref('')
  const bankModal = ref(false)
  const bankSearch = ref('')

  // Quick transfer contacts
  const quickContacts = [
    {
      name: 'John Doe',
      mobile: '9876543210',
      initials: 'JD',
      bgClass: 'quick-avatar-blue',
      textClass: 'quick-text-blue',
    },
    {
      name: 'Sarah Smith',
      mobile: '9123456789',
      initials: 'SS',
      bgClass: 'quick-avatar-green',
      textClass: 'quick-text-green',
    },
    {
      name: 'Mike Johnson',
      mobile: '9988776655',
      initials: 'MJ',
      bgClass: 'quick-avatar-purple',
      textClass: 'quick-text-purple',
    },
  ]

  // Recent transfers
  const recentTransfers = [
    {
      id: 1,
      name: 'John Doe',
      time: '2 hours ago',
      amount: 5000,
      status: 'Success',
      statusClass: 'status-success',
      iconBg: 'icon-bg-green',
      iconColor: 'icon-color-green',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      time: '1 day ago',
      amount: 2500,
      status: 'Success',
      statusClass: 'status-success',
      iconBg: 'icon-bg-blue',
      iconColor: 'icon-color-blue',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      time: '3 days ago',
      amount: 1000,
      status: 'Pending',
      statusClass: 'status-pending',
      iconBg: 'icon-bg-orange',
      iconColor: 'icon-color-orange',
    },
  ]

  // Bank data
  const banks = [
    { ifsc: 'SBIN0001234', name: 'State Bank of India', branch: 'Main Branch, Mumbai' },
    { ifsc: 'HDFC0000123', name: 'HDFC Bank', branch: 'Andheri Branch, Mumbai' },
    { ifsc: 'ICIC0000456', name: 'ICICI Bank', branch: 'Bandra Branch, Mumbai' },
    { ifsc: 'AXIS0000789', name: 'Axis Bank', branch: 'Powai Branch, Mumbai' },
  ]

  // Computed
  const filteredBanks = computed(() => {
    if (!bankSearch.value) return banks
    const search = bankSearch.value.toLowerCase()
    return banks.filter(
      (bank) =>
        bank.name.toLowerCase().includes(search) ||
        bank.ifsc.toLowerCase().includes(search) ||
        bank.branch.toLowerCase().includes(search),
    )
  })

  // Methods
  function openBankSearchModal() {
    bankModal.value = true
    document.body.style.overflow = 'hidden'
  }

  function closeBankSearchModal() {
    bankModal.value = false
    document.body.style.overflow = 'auto'
  }

  function selectBank(ifsc: string, name: string) {
    ifscCode.value = ifsc
    bankName.value = name
    closeBankSearchModal()
  }

  function quickTransfer(name: string, mobile: string) {
    recipientName.value = name
    recipientMobile.value = mobile
  }

  function verifyAccount() {
    if (!accountNumber.value || !ifscCode.value) {
      alert('Please enter account number and IFSC code')
      return
    }
    alert('Account verification in progress...')
  }

  function validateAccountMatch() {
    if (
      accountNumber.value &&
      confirmAccount.value &&
      accountNumber.value !== confirmAccount.value
    ) {
      alert('Account numbers do not match')
    }
  }

  function onSubmit() {
    alert('Money transfer submitted!')
  }

  return {
    recipientName,
    recipientMobile,
    accountNumber,
    confirmAccount,
    ifscCode,
    bankName,
    transferAmount,
    purpose,
    bankModal,
    bankSearch,
    quickContacts,
    recentTransfers,
    banks,
    filteredBanks,
    openBankSearchModal,
    closeBankSearchModal,
    selectBank,
    quickTransfer,
    verifyAccount,
    validateAccountMatch,
    onSubmit,
  }
}
