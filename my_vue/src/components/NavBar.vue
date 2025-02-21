<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg"  class="my-navbar">
    <BNavbarBrand href="#">HSI</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#"></BNavItem>
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="Lang" right>
          <BDropdownItem href="#">Cytoscape.js</BDropdownItem>
          <BDropdownItem href="#">JobRunner</BDropdownItem>
        </BNavItemDropdown>
<!--        <BNavItemDropdown right>-->
<!--          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--          <template #button-content>-->
<!--            <em>User</em>-->
<!--          </template>-->
<!--          <BDropdownItem href="#">Profile</BDropdownItem>-->
<!--          <BDropdownItem href="#">Sign Out</BDropdownItem>-->
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
  background-color: #E98D24;  /* Your custom color */
}

</style>