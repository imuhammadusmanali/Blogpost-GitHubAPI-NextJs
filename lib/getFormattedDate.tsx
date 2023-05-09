export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}

// export default function getFormattedDate(dateString: string): string {
//   try {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
//   } catch (error) {
//     console.error(`Error parsing date string "${dateString}":`, error);
//     return 'Invalid date';
//   }
// }
