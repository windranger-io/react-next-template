import Stacked from 'layouts/Stacked'
import Page from 'layouts/Page'
import Card from 'components/Card'
import DynamicTable from 'components/DynamicTable'

const Home = () => {
  return (
    <Stacked>
      <Page title="Dashboard Components" fullWidth>
        <div className="px-4 py-8 sm:px-0">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <Card>
                  <DynamicTable />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </Stacked>
  )
}

export default Home
