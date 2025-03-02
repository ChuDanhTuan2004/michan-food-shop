document.addEventListener('DOMContentLoaded', function() {
  // Extract product ID from URL hash
  const productId = window.location.hash.substring(1);
  
  // Find the product in our data
  const product = products.find(p => p.id === productId);
  
  const detailContainer = document.getElementById('product-detail-container');
  
  if (product) {
    // Set page title to product name
    document.title = `${product.name} - Chi tiết sản phẩm`;
    
    // Generate product details HTML
    const stars = '⭐'.repeat(Math.floor(product.rating));
    const description = getProductDescription(productId);
    const specs = getProductSpecs(productId);
    
    const detailHTML = `
      <div class="product-detail">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h1 class="product-title">${product.name}</h1>
          <div class="product-rating">${stars} <span>(${product.rating})</span></div>
          <div class="product-price">${product.price}</div>
          
          <div class="product-description">
            ${description}
          </div>
          
          <div class="product-specs">
            <h3>Thông số sản phẩm</h3>
            ${specs}
          </div>
          
          <div class="quantity-selector">
            <button onclick="decreaseQuantity()">-</button>
            <input type="number" id="quantity" value="1" min="1">
            <button onclick="increaseQuantity()">+</button>
          </div>
          
          <button class="add-to-cart" onclick="addToCart('${product.id}')">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    `;
    
    detailContainer.innerHTML = detailHTML;
    
    // Show similar products (same category)
    const similarProducts = products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
      
    if (similarProducts.length > 0) {
      const similarContainer = document.getElementById('similar-products-container');
      
      let similarHTML = `
        <h2>Sản phẩm tương tự</h2>
        <div class="similar-grid">
      `;
      
      similarProducts.forEach(similarProduct => {
        similarHTML += `
          <a href="popup.html#${similarProduct.id}" class="similar-item" onclick="handleSimilarProductClick(event, '${similarProduct.id}')">
            <img src="${similarProduct.image}" alt="${similarProduct.name}">
            <div class="similar-info">
              <div class="similar-name">${similarProduct.name}</div>
              <div class="similar-price">${similarProduct.price}</div>
            </div>
          </a>
        `;
      });
      
      similarHTML += '</div>';
      similarContainer.innerHTML = similarHTML;
    }
  } else {
    // Product not found
    detailContainer.innerHTML = `
      <div class="not-found">
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      </div>
    `;
  }
  
  // Listen for hash changes to reload the page content
  window.addEventListener('hashchange', function() {
    window.location.reload();
  });
});

// Function to handle similar product clicks
function handleSimilarProductClick(event, productId) {
  // Update URL hash
  window.location.hash = productId;
  
  // Prevent default to handle navigation ourselves
  event.preventDefault();
  
  // Reload the page to show the new product
  window.location.reload();
}

// Helper functions for quantity selector
function increaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function addToCart(productId) {
  const quantity = document.getElementById('quantity').value;
  alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  // Here you would typically update a cart object and perhaps store in localStorage
}

// Helper function to get product descriptions
function getProductDescription(productId) {
  // You could expand this to load from a separate data source
  const descriptions = {
    'duicuu': 'Đùi cừu tươi ngon, được nhập khẩu trực tiếp từ trang trại hữu cơ New Zealand. Thịt cừu mềm, ngọt, có hương vị đặc trưng và giàu dinh dưỡng. Phù hợp cho các món nướng, hầm hoặc om với rau củ.',
    'duiheomuoi': 'Đùi heo muối chế biến theo công thức truyền thống châu Âu, ướp muối và hun khói tự nhiên trong thời gian dài. Thịt có màu đỏ hồng đẹp mắt, hương vị đậm đà và độ mặn vừa phải.',
    'dautay': 'Dâu tây Sơn La tươi ngon, được trồng tại vùng cao nguyên với khí hậu lý tưởng. Quả to, đỏ tươi, vị ngọt thanh với độ chua nhẹ. Giàu vitamin C và chất chống oxy hóa.',
    'thanbo': 'Thăn bò cao cấp với vân mỡ đẹp, thịt mềm và hương vị đậm đà. Được lấy từ phần thịt lưng của bò, đây là phần thịt được ưa chuộng nhất, phù hợp cho các món nướng hoặc áp chảo.',
    'salami': 'Salami được làm từ thịt heo và thịt bò thượng hạng, ướp với các loại gia vị theo công thức Ý. Sản phẩm được lên men tự nhiên tạo ra hương vị đặc trưng và bảo quản lâu.',
    'suoncuu': 'Sườn cừu tươi ngon với lớp mỡ vừa phải, thích hợp cho các món nướng hoặc áp chảo. Thịt mềm, ngọt với hương vị đặc trưng của cừu non.',
  };
  
  return descriptions[productId] || 
    'Sản phẩm tươi ngon, được tuyển chọn kỹ lưỡng từ những nguồn cung cấp uy tín. Đảm bảo vệ sinh an toàn thực phẩm và giữ nguyên hương vị tự nhiên.';
}

// Helper function to get product specifications
function getProductSpecs(productId) {
  // Generic specs for different categories
  const meatSpecs = `
    <div class="spec-item">
      <div class="spec-label">Nguồn gốc:</div>
      <div class="spec-value">Nhập khẩu</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Bảo quản:</div>
      <div class="spec-value">2°C đến 4°C</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Hạn sử dụng:</div>
      <div class="spec-value">7 ngày kể từ ngày sản xuất</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Hướng dẫn sử dụng:</div>
      <div class="spec-value">Chế biến kỹ trước khi sử dụng</div>
    </div>
  `;
  
  const fruitSpecs = `
    <div class="spec-item">
      <div class="spec-label">Nguồn gốc:</div>
      <div class="spec-value">Việt Nam</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Bảo quản:</div>
      <div class="spec-value">Nhiệt độ mát 5°C đến 10°C</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Hạn sử dụng:</div>
      <div class="spec-value">5-7 ngày ở nhiệt độ mát</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Hướng dẫn sử dụng:</div>
      <div class="spec-value">Rửa sạch trước khi ăn</div>
    </div>
  `;
  
  // Find product to determine category
  const product = products.find(p => p.id === productId);
  if (product) {
    if (product.category === 'Fruits') {
      return fruitSpecs;
    } else {
      return meatSpecs;
    }
  }
  
  return meatSpecs; // Default to meat specs if product not found
}
