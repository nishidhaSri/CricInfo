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
        <a-input placeholder="Search for team" />
      </a-col>
      <a-col :sm="{ span: 24 }" :md="{ span: 8 }">
        <div class="filters">
          <a-button type="primary" @click="showModal"> + Add Filters </a-button>
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
                Select the teams you want to know about
              </div>
              <div>
                <div class="sub-heading">Matches in home</div>
                <div>
                  <a-checkbox
                    :indeterminate="indeterminate1"
                    :checked="checkAll"
                    @change="onCheckAllChange1"
                  >
                    Check all
                  </a-checkbox>
                </div>
                <br />

                <a-checkbox-group
                  v-model="checkedList"
                  :options="homeMatches"
                  @change="onChange1"
                />
              </div>
              <br />
              <div>
                <div class="sub-heading">Matches away</div>
                <div>
                  <a-checkbox
                    :indeterminate="indeterminate2"
                    :checked="checkAll2"
                    @change="onCheckAllChange2"
                  >
                    Check all
                  </a-checkbox>
                </div>
                <br />

                <a-checkbox-group
                  v-model="checkedList2"
                  :options="awayMatches"
                  @change="onChange2"
                />
              </div>
              <br />
              <div>
                <div class="sub-heading">Home win percentage</div>
                <div>
                  <a-checkbox
                    :indeterminate="indeterminate3"
                    :checked="checkAll3"
                    @change="onCheckAllChange3"
                  >
                    Check all
                  </a-checkbox>
                </div>
                <br />

                <a-checkbox-group
                  v-model="checkedList3"
                  :options="homeWin"
                  @change="onChange3"
                />
              </div>
              <br />
              <div>
                <div class="sub-heading">Away win percentage</div>
                <div>
                  <a-checkbox
                    :indeterminate="indeterminate4"
                    :checked="checkAll4"
                    @change="onCheckAllChange4"
                  >
                    Check all
                  </a-checkbox>
                </div>
                <br />

                <a-checkbox-group
                  v-model="checkedList4"
                  :options="awayWin"
                  @change="onChange4"
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
        <TeamCard v-for="team in teamsData" :key="team.team" :team="team" />
      </div>
      <div v-else class="no-results">
        <NoResults next="/" />
      </div>
    </a-row>
  </div>
</template>

<script>
import teamsData from '../components/teams.json'
const homeWin = ['>=50%', '<50%']
const awayWin = ['>=50%', '<50%']
const homeMatches = ['>=50', '<50']
const awayMatches = ['>=50', '<50']

export default {
  head() {
    return {
      title: 'Cricket Teams - CricInfo',
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
      teamsData,
      visible: false,
      checkedList: homeMatches,
      checkedList2: awayMatches,
      checkedList3: homeWin,
      checkedList4: awayWin,
      indeterminate1: true,
      indeterminate2: true,
      indeterminate3: true,
      indeterminate4: true,
      checkAll: true,
      checkAll2: true,
      checkAll3: true,
      checkAll4: true,
      applied: false,
      homeWin,
      homeMatches,
      awayWin,
      awayMatches,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    onClose() {
      this.visible = false
    },
    onChange1(checkedList) {
      this.indeterminate1 =
        !!checkedList.length && checkedList.length < homeMatches.length
      this.checkAll = checkedList.length === homeMatches.length
    },
    onChange2(checkedList) {
      this.indeterminate2 =
        !!checkedList.length && checkedList.length < awayMatches.length
      this.checkAll2 = checkedList.length === awayMatches.length
    },
    onChange3(checkedList) {
      this.indeterminate3 =
        !!checkedList.length && checkedList.length < homeWin.length
      this.checkAll3 = checkedList.length === homeWin.length
    },
    onChange4(checkedList) {
      this.indeterminate4 =
        !!checkedList.length && checkedList.length < awayWin.length
      this.checkAll4 = checkedList.length === awayWin.length
    },
    onCheckAllChange1(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? homeMatches : [],
        indeterminate1: false,
        checkAll: e.target.checked,
      })
    },
    onCheckAllChange2(e) {
      Object.assign(this, {
        checkedList2: e.target.checked ? awayMatches : [],
        indeterminate2: false,
        checkAll2: e.target.checked,
      })
    },
    onCheckAllChange3(e) {
      Object.assign(this, {
        checkedList3: e.target.checked ? homeWin : [],
        indeterminate3: false,
        checkAll3: e.target.checked,
      })
    },
    onCheckAllChange4(e) {
      Object.assign(this, {
        checkedList4: e.target.checked ? awayWin : [],
        indeterminate4: false,
        checkAll4: e.target.checked,
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
  background-color: rgb(244, 202, 27);
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
</style>
