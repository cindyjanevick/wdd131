document.addEventListener('DOMContentLoaded', function () {
  const products = [
      { id: 'onesie', name: "Baby Onesie - Newborn", avg_rating: 4.5 },
      { id: 'romper', name: "Baby Romper - 3-6 months", avg_rating: 4.7 },
      { id: 'blanket', name: "Baby blanket - soft cotton", avg_rating: 3.5 },
      { id: 'hat', name: "Baby Hat - Wool Knit", avg_rating: 3.9 },
      { id: 'shoes', name: "Baby shoes -  6-12 months", avg_rating: 5.0 }
  ];

  const selectElement = document.getElementById('product-name');
  if (selectElement) {
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.name;
          option.textContent = product.name;
          selectElement.appendChild(option);
      });
  }

  if (localStorage.getItem('reviewCount') === null) {
      localStorage.setItem('reviewCount', 0);
  }

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  const copyrightYearElement = document.getElementById('currentyear');
  const lastModifiedElement = document.getElementById('lastModified');
  if (copyrightYearElement) {
      copyrightYearElement.textContent = currentYear;
  }
  if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last update: ${lastModified}`;
  }
});
