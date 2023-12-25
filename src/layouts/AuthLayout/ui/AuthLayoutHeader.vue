<script setup lang="ts">
import classNames from 'classNames';
import { Avatar, Dropdown, Menu, MenuItem, Space } from 'ant-design-vue';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import { useAuthProvider } from '@/shared/providers/authProvider';

defineProps<{
    className?: string;
}>();

const { sessionUserData, actionLogout } = useAuthProvider();
</script>

<template>
    <header :class="classNames(className)">
        <div>
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
                    <!-- <div className="themeSwitcher">
                            <Switch
                                checkedChildren={<Icon component={ImgIcon(SunPng, 20, 20, { position: 'relative', top: 1 })} />}
                                unCheckedChildren={<Icon component={ImgIcon(MoonPng, 16, 16, { position: 'relative', top: -2 })} />}
                                defaultChecked={theme !== Theme.DARK}
                                onChange={onThemeSwitcherChange}
                            />
                        </div> -->
                </Space>
            </div>
        </div>
    </header>
</template>
