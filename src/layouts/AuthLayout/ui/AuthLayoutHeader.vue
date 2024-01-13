<script setup lang="ts">
import classNames from 'classNames';
import { ref, watch } from 'vue';
import { Avatar, Drawer, Dropdown, Menu, MenuItem, Space, Switch } from 'ant-design-vue';
import { UserOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons-vue';
import SunPng from '@/shared/assets/icons/files/icon-sun-40x40.png';
import MoonPng from '@/shared/assets/icons/files/icon-moon-40x40.png';
import { useDocWidth } from '@/shared/lib/hooks/useDocWidth';
import { useThemeProvider } from '@/shared/lib/injectHooks/useThemeProvider/useThemeProvider';
import { useSessionUserProvider } from '@/shared/lib/injectHooks/useSessionUserProvider/useSessionUserProvider';

defineProps<{
    className?: string;
}>();

const {
    actionLogout,
    data: { sessionUserData },
} = useSessionUserProvider();

const { theme, setTheme, enumTheme } = useThemeProvider();

const themeSwitchValue = ref<boolean>(theme.value !== enumTheme.DARK);

watch(themeSwitchValue, () => {
    setTheme(theme.value === enumTheme.DARK ? enumTheme.LIGHT : enumTheme.DARK);
});

const { $docWidth } = useDocWidth();

const menuDrawerIsOpened = ref(false);
</script>

<template>
    <header :class="classNames(className)">
        <div>
            <div class="menu">
                <template v-if="$docWidth['>='].xl">
                    <span @click.prevent="menuDrawerIsOpened = true">
                        <MenuOutlined
                            alt="Меню"
                            class="icon"
                        />
                    </span>
                </template>
                <Drawer
                    title="Меню"
                    placement="left"
                    v-model:open="menuDrawerIsOpened"
                    destroyOnClose
                >
                    ТЕСТ
                    <!-- <Menu
                            onClick={onClickMenuWrapped}
                            style={{ width: '100%' }}
                            selectedKeys={selectedMenu ? [selectedMenu] : []}
                            mode="inline"
                            items={menuItems}
                        /> -->
                </Drawer>
            </div>
            <div class="logo">
                <RouterLink to="/">Datafone.ru</RouterLink>
            </div>
            <div class="userData">
                <Space size="middle">
                    <div class="hello">Привет, {{ sessionUserData?.user.firstName }}!</div>
                    <div class="avatarBlock">
                        <Dropdown placement="bottomRight">
                            <span class="avatarWrapper">
                                <Avatar
                                    class="avatar"
                                    :src="sessionUserData?.user.avatarThumb100 ? sessionUserData?.user.avatarThumb100.way : undefined"
                                >
                                    {{ sessionUserData?.user.firstName.slice(0, 1) }}
                                </Avatar>
                            </span>
                            <template #overlay>
                                <Menu>
                                    <MenuItem
                                        ><RouterLink to="/myProfile"><UserOutlined /> Редактировать профиль</RouterLink></MenuItem
                                    >
                                    <MenuItem :danger="true"
                                        ><a
                                            href="javascript://"
                                            @click.prevent="actionLogout"
                                            ><LogoutOutlined /> Выход</a
                                        ></MenuItem
                                    >
                                </Menu>
                            </template>
                        </Dropdown>
                    </div>
                    <div class="themeSwitcher">
                        <Switch v-model:checked="themeSwitchValue">
                            <template #checkedChildren>
                                <img
                                    :src="SunPng"
                                    alt=""
                                    :width="20"
                                    :height="20"
                                    :style="{ position: 'relative', top: '1px' }"
                                />
                            </template>
                            <template #unCheckedChildren>
                                <img
                                    :src="MoonPng"
                                    alt=""
                                    :width="16"
                                    :height="16"
                                    :style="{ position: 'relative', top: '-2px' }"
                                />
                            </template>
                        </Switch>
                    </div>
                </Space>
            </div>
        </div>
    </header>
</template>
@/shared/lib/hooks/useThemeProvider/useThemeProvider@/shared/lib/hooks/useSessionUserProvider/useSessionUserProvider
