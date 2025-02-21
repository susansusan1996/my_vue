<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="dark" class="my-navbar">
    <BNavbarBrand to="/">資工六法全書</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem ></BNavItem>
      </BNavbarNav>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="線性代數" right>
          <BDropdownItem href="#">第一章-矩陣的基本定義及運算</BDropdownItem>
          <BDropdownItem href="#">第二章-線性方程組與行列式</BDropdownItem>
          <BDropdownItem href="#">第三章-向量空間</BDropdownItem>
          <BDropdownItem href="#">第四章-線性映射</BDropdownItem>
          <BDropdownItem href="#">第五章-對角化</BDropdownItem>
          <BDropdownItem href="#">第六章-Jordan Form</BDropdownItem>
          <BDropdownItem href="#">第七章-內積空間</BDropdownItem>
          <BDropdownItem href="#">第八章-內積算子</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown text="資料結構" right>
          <BDropdownItem to="/stack">stack</BDropdownItem>
          <BDropdownItem to="/queue">queue</BDropdownItem>
          <BDropdownItem to="/bst">binary search tree</BDropdownItem>
          <BDropdownItem to="/heap">heap</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown disabled="" text="離散數學" right>
        </BNavItemDropdown>
        <BNavItemDropdown disabled="" text="演算法" right>
        </BNavItemDropdown>
        <BNavItemDropdown disabled="" text="作業系統" right>
        </BNavItemDropdown>
        <BNavItemDropdown disabled="" text="計算機組織" right>
        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex">
        <BFormInput class="me-2" placeholder="Search" />
        <BButton type="submit" variant="outline-success">Search</BButton>
      </BNavForm>
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
</script>

<style scoped>

.my-navbar {
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
}

</style>