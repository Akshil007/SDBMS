from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import csv
import re
import threading

writeFile = open('forex-data.csv', 'a')
writer = csv.writer(writeFile)
# writer.writerow(['Item', 'Last-Price', 'Last-Diff-Value', 'Last-Diff-Percentage', 'Daily-Range-Low', 'Daily-Range-High', 'Bid', 'Ask'])

driver = webdriver.Firefox()
driver.get('https://in.investing.com/currencies/live-currency-cross-rates')

items = driver.find_element_by_class_name('forex-rates')

def scrapValues():
    parentList = []

    for ele in items.find_elements_by_class_name('forex-rates-item'):
        childList = []
        childList.append(ele.find_element_by_class_name('forex-rates-item-title').text)
        childList.append(ele.find_element_by_class_name('last-price-value').text)
        childList.append(re.sub(r'[^\d.-]', '', ele.find_element_by_class_name('last-diff-value').text))
        childList.append(re.sub(r'[^\d.-]', '', ele.find_element_by_class_name('last-diff-percent').text))
        childList.extend(ele.find_element_by_class_name('daily-range').text.split('\n'))
        childList.append(ele.find_element_by_class_name('start').find_element_by_tag_name('span').text)
        childList.append(ele.find_element_by_class_name('end').find_element_by_tag_name('span').text)
        parentList.append(childList)

    print(parentList)

    writer.writerows(parentList)

# scrapValues()

start_time = threading.Timer(5,scrapValues)
start_time.start()

# writeFile.close()
