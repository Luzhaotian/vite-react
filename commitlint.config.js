export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式（不影响功能）
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 测试相关
        'chore', // 构建/工具链相关
        'revert', // 回滚
        'build', // 构建系统
        'ci', // CI 配置
      ],
    ],
    'subject-case': [0], // 不限制主题大小写
    'subject-empty': [0], // 允许空主题（用于中文）
  },
};
