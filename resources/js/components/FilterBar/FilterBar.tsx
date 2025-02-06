import { useRef, useEffect, useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import pickBy from 'lodash/pickBy';

export default function FilterBar() {
  const { filters } = usePage().props;

  const [values, setValues] = useState({
    role: filters.role || '',
    search: filters.search || '',
    trashed: filters.trashed || ''
  });

  const prevValuesRef = useRef(values);

  useEffect(() => {
    const prevValues = prevValuesRef.current;

    if (JSON.stringify(prevValues) !== JSON.stringify(values)) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};
      router.get(route(route().current() as string), query, {
        replace: true,
        preserveState: true
      });

      prevValuesRef.current = values; // Update ref with the new values
    }
  }, [values]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="flex items-center w-full max-w-md mr-4">
      <div className="relative flex bg-white rounded shadow">
        <div
          style={{ top: '100%' }}
          className={`absolute ${opened ? '' : 'hidden'}`}
        >
          <div
            onClick={() => setOpened(false)}
            className="fixed inset-0 z-20 bg-black opacity-25"
          />
          <div className="relative z-30 w-64 px-4 py-6 mt-2 bg-white rounded shadow-lg space-y-4">
            {filters.hasOwnProperty('role') && (
              <FieldGroup label="Role" name="role">
                <SelectInput
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  options={[
                    { value: '', label: '' },
                    { value: 'user', label: 'User' },
                    { value: 'owner', label: 'Owner' }
                  ]}
                />
              </FieldGroup>
            )}
            <FieldGroup label="Trashed" name="trashed">
              <SelectInput
                name="trashed"
                value={values.trashed}
                onChange={handleChange}
                options={[
                  { value: '', label: '' },
                  { value: 'with', label: 'With Trashed' },
                  { value: 'only', label: 'Only Trashed' }
                ]}
              />
            </FieldGroup>
          </div>
        </div>
        <button
          onClick={() => setOpened(true)}
          className="px-4 border-r rounded-l md:px-6 hover:bg-gray-100 focus:outline-none focus:border-white focus:ring-2 focus:ring-indigo-400 focus:z-10"
        >
          <div className="flex items-center">
            <span className="hidden text-gray-700 md:inline">Filter</span>
            <ChevronDown size={14} strokeWidth={3} className="md:ml-2" />
          </div>
        </button>
        <TextInput
          name="search"
          placeholder="Search…"
          autoComplete="off"
          value={values.search}
          onChange={handleChange}
          className="border-0 rounded-l-none focus:ring-2"
        />
      </div>
      <button
        onClick={reset}
        className="ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none"
        type="button"
      >
        Reset
      </button>
    </div>
  );
}
