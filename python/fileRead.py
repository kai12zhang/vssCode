
import os

g = os.walk(r"E:\\git_test")
for path,dir_list,file_list in g:
    for file_name in file_list:
        print(os.path.join(path,file_name))
