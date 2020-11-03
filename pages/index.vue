<template>
  <div class="players-home">
    <a-row class="show-menu">
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
        id="hide-nav"
      >
        <NuxtLink to="/teams"
          ><a-menu-item key="1">Teams</a-menu-item></NuxtLink
        >
        <NuxtLink to="/"><a-menu-item key="2">Players</a-menu-item></NuxtLink>
      </a-menu>
    </a-row>
    <a-row class="search-bar">
      <a-col :sm="{ span: 24 }" :md="{ span: 16 }">
        <a-input placeholder="Search for players" />
      </a-col>
      <a-col :sm="{ span: 24 }" :md="{ span: 8 }">
        <div class="filters">
          <a-button type="primary" @click="showDrawer">
            + Add Filters
          </a-button>
          <a-drawer
            placement="right"
            :closable="false"
            :visible="visible"
            @close="onClose"
            class="filter-drawer"
          >
            <div class="heading">Edit Filters</div>
            <div>
              <div class="sub-heading">
                Select the players you want to know about
              </div>
              <div>
                <div class="sub-heading">Bowling style</div>
                <div>
                  <a-checkbox
                    :indeterminate="indeterminate"
                    :checked="checkAll"
                    @change="onCheckAllChange"
                  >
                    Check all
                  </a-checkbox>
                </div>
                <br />

                <a-checkbox-group
                  v-model="checkedList"
                  :options="bowlOptions"
                  @change="onChange"
                />
              </div>
              <br />
              <div>
                <div class="sub-heading">Batting Traits</div>
                <div>
                  <a-checkbox
                    :indeterminate="indeterminate"
                    :checked="checkAll2"
                    @change="onCheckAllChange2"
                  >
                    Check all
                  </a-checkbox>
                </div>
                <br />

                <a-checkbox-group
                  v-model="checkedList2"
                  :options="batOptions"
                  @change="onBatChange"
                />
              </div>
            </div>
            <div class="filters" style="margin-top: 10px">
              <a-button @click="apply">Apply </a-button>
            </div>
            <div class="filters" style="margin-top: 10px">
              <a-button @click="clear" v-if="applied">Clear All</a-button>
            </div>
          </a-drawer>
        </div>
      </a-col>
    </a-row>
    <a-row class="player-cards">
      <div v-if="!applied">
        <AppCard
          v-for="player in data1"
          :key="player.Player_Name"
          :player="player"
        />
      </div>
      <div v-else class="no-results">
        <NoResults next="teams" />
      </div>
    </a-row>
  </div>
</template>

<script>
import data1 from '../components/players.json'
const bowlOptions = [
  'Right-Arm bowler',
  'Left-Arm bowler',
  'Offbreak',
  'Fast-medium',
  'Legbreak',
  'Googly',
  'Medium',
]

const batOptions = ['Right Hand', 'Left Hand']
// const defaultCheckedList = ['Apple', 'Orange']
export default {
  head() {
    return {
      title: 'Cricket Players - CricInfo',
      meta: [
        {
          hid:
            'Know all the information of Cricket players and teams in one place',
          name: 'CricInfo',
          content:
            'Know all the information of Cricket players and teams in one place',
        },
      ],
    }
  },
  data() {
    return {
      data1,
      visible: false,
      checkedList: bowlOptions,
      checkedList2: batOptions,
      indeterminate: true,
      checkAll: true,
      checkAll2: true,
      applied: false,
      bowlOptions,
      batOptions,
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    onChange(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < bowlOptions.length
      this.checkAll = checkedList.length === bowlOptions.length
    },
    onBatChange(checkedList2) {
      this.indeterminate =
        !!checkedList2.length && checkedList2.length < batOptions.length
      this.checkAll2 = checkedList2.length === batOptions.length
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? bowlOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      })
    },
    onCheckAllChange2(e) {
      Object.assign(this, {
        checkedList2: e.target.checked ? batOptions : [],
        indeterminate: false,
        checkAll2: e.target.checked,
      })
    },
    apply() {
      Object.assign(this, {
        applied: true,
        visible: false,
      })
    },
    clear() {
      Object.assign(this, {
        applied: false,
        visible: false,
      })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Nunito+Sans&display=swap');

.players-home {
  background-color: #d6d4c8;
  min-height: 92vh;
}

.search-bar {
  padding: 20px 30px;
}

.search-bar .ant-input {
  border: 2px solid;
  border-radius: 15px;
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
}

.filters {
  display: flex;
}

.filters .ant-btn {
  margin: 0 auto;
  background-color: #f4ca1b;
  color: #373737;
  border: 2px solid #000;
  font-weight: 700;
  font-family: 'Nunito Sans', sans-serif;
}

.player-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-drawer {
  font-family: 'Nunito Sans', sans-serif;
}

.filter-drawer .ant-drawer-content-wrapper {
  width: 300px !important;
  background: #000;
  color: #f4ca1b;
}

.filter-drawer .ant-drawer-content {
  background: inherit;
}

.heading {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
}

.sub-heading {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.filter-drawer .ant-checkbox-indeterminate .ant-checkbox-inner::after,
.filter-drawer .ant-checkbox-checked .ant-checkbox-inner,
.filter-drawer .ant-checkbox-checked .ant-checkbox-inner:hover,
.filter-drawer .ant-checkbox-checked .ant-checkbox-inner:focus {
  background-color: #373737;
  border-color: #f4ca1b;
}

.filter-drawer .ant-checkbox-wrapper {
  color: #f4ca1b;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  width: 100%;
}

.no-results-card {
  width: 100%;
}

.show-menu {
  display: none;
}

.show-menu .ant-menu {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  background: #d6d4c8;
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  width: 100%;
  font-weight: 700;
}

.show-menu .ant-menu:focus,
.show-menu .ant-menu:hover,
.show-menu .ant-menu::after {
  color: #000;
}

.show-menu .ant-menu.ant-menu-dark .ant-menu-item-selected {
  background: none;
  border-bottom: 2px solid #373737;
}

.show-menu .ant-menu-dark .ant-menu,
.show-menu .ant-menu-dark .ant-menu-item {
  color: #000;
}

@media screen and (max-width: 460px) {
  .show-menu {
    display: flex;
  }
}
</style>
