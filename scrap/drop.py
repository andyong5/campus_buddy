import pandas as pd
df = pd.read_csv("/home/andy/Desktop/campus_buddy/scrap/drop.csv")
print(df)

# delete all duplicates
# df = df.drop_duplicates(subset=['sub_num'], keep='first')
# df = df[df.crn != '@']
# print(df)

# df.to_csv('drop.csv')


df = df.drop(columns=['Unnamed: 0.1', 'Unnamed: 0'])
print(df)

# df['termID'] = 1
# print(df)

df.to_csv('drop.csv')