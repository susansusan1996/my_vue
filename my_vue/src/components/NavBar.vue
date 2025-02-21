<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="dark" class="my-navbar">
    <BNavbarBrand to="/">凰喜的作品集</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem ></BNavItem>
      </BNavbarNav>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="遊戲" right>
          <BDropdownItem to="/snake">貪吃蛇</BDropdownItem>
          <BDropdownItem to="/mario">馬力歐</BDropdownItem>
          <BDropdownItem to="/shoot">射擊遊戲</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown text="資料結構學習" right>
          <BDropdownItem to="/stack">stack</BDropdownItem>
          <BDropdownItem to="/queue">queue</BDropdownItem>
          <BDropdownItem to="/bst">binary search tree</BDropdownItem>
        </BNavItemDropdown>
<!--        <BNavItemDropdown disabled="" text="離散數學" right>-->
<!--        </BNavItemDropdown>-->
<!--        <BNavItemDropdown disabled="" text="演算法" right>-->
<!--        </BNavItemDropdown>-->
<!--        <BNavItemDropdown disabled="" text="作業系統" right>-->
<!--        </BNavItemDropdown>-->
<!--        <BNavItemDropdown disabled="" text="計算機組織" right>-->
<!--        </BNavItemDropdown>-->
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