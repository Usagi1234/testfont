export const documentStatus = status => {
  switch (status) {
    case 1:
      return { text: 'Approved and waiting for the teacher to check.', color: 'warning' }
    case 2:
      return { text: 'Incomplete, send new document', color: 'warning' }
    case 3:
      return { text: 'Approved and waiting for the registration department to check.', color: 'warning' }
    case 4:
      return { text: 'Completed', color: 'success' }
    default:
      return { text: 'Unknown status', color: 'error' }
  }
}
