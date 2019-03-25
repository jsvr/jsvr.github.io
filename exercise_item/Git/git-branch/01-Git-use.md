# Git 使用

## 命令

```bash
# git branch                          列出所有分支
# git branch name                     创建name分支
# git checkout name                   切换到name分支
# git branch -d | -D name             删除name分支
# git branch -d -r name               删除远程name分支
# git g merge Name                    把name分支合并到当前分支上
# git fetch;  git pull origin online  此时就切换到online分支
# q 跳出 git log
# git reset --hard 需要回滚到的版本的hash值   如果在分支上回滚完后不用提交
# git push -f origin master           强制提交
# git push origin online:online		  提交online分支
# git push origin :online		        删除online分支


> git rebase
# git rebase b							 合并b
# git rebase –continue 			       处理完冲突继续合并
# git rebase –skip					    跳过
# git rebase –abort					    取消合并

```

## 开发规范

```bash
# master             主分支
# develop            开发分支
# develop/feature    开发新功能时，以develop为基础创建feature分支,feature-test
# hotfix 分支        修复bug分支
```

## 项目代码push规则

```bash
# git checkout online                   //切换到online分支
# git pull                              //拉取最新的online分支
# git checkout zy-develop               //切换到zy-develop
# git merge online                      //把最新的online分支合并到zy-develop
# git push                              //提交最新的zy-develop分支到远端
# 在 zy-develop修改代码 保存              //修改需求
# git add .   git commit -m 'add'       //提交暂存 提交代码
# git push                              //把自己的分支提交到远端
# git checkout online                   //切换到online分支
# git merge zy-develop                  //把zy-develop合并到当前(online)分支
# git push                              //把online分支push到远端
# 在online分支上创建功能分支
# 把online分支合并到自己的分支上(保证online分支是最新的)
# 把自己的分支合并到online上(把自己的功能合并到最新的online分支上,上传)
# 提交打包代码 待定
```

## vscode 合并代码

```bash
# command + shift + P 
# Git: 合并分支
# 选择哪个就是把哪个合并到当前分支
```