from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time
import pandas as pd

driver = webdriver.Chrome(executable_path=r"/home/andy/Desktop/chromedriver")
driver.get("https://registrar-apps.ucdavis.edu/courses/search/index.cfm")
select = Select(driver.find_element_by_name("subject"))

final = []
options = select.options
for x in options:
    val = x.get_attribute("value")
    if val == "-":
        continue
    select.select_by_value(val)
    driver.find_element_by_name('search').click()
    time.sleep(1)
    y = 0
    try:
        table = driver.find_element_by_xpath("//*[@id='mc_win']")
        print('found table')
        for row in table.find_elements_by_xpath('.//tr'):
            x= 0
            c = {}
            for data in row.find_elements_by_xpath('./td'):
                f = str(data.text).split('\n')
                if y < 4 or "Cross-listed" in data.text:
                    continue
                if x == 0 and "CRN's found" not in f[0]:
                    c['crn'] = f[0]
                    if len(f) == 2:
                        c['date'] = f[1]
                if x == 1:
                    sp = f[0].split(' ')
                    c['subj'] = sp[0]
                    if len(sp) == 2:
                        c['sub_num'] = sp[1]
                    c['course'] = f[0]
                    if len(f) == 2:
                        c['location'] = f[1]
                if x == 2:
                    c['section'] = f[0] 
                if x == 3:
                    c['description'] = f[0]
                if x== 4:
                    c['instructor'] = f[0]
                    if len(f) == 2:
                        c['credit'] = f[1]
                x += 1
            y+= 1
            if c:
                print(c)
                final.append(c)
    except:
        print('no table')

df = pd.DataFrame(final)
print(df)
df.to_csv('cs.csv')
        