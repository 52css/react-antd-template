export type SelectOption = { label: string; value: string | number };
export type OptionsInput =
  | Array<string | SelectOption>
  | Record<string, string>;

export const getOptions = (options?: OptionsInput | null): SelectOption[] => {
  const selectOptions: SelectOption[] = [];

  if (Array.isArray(options)) {
    options.forEach((item: string | SelectOption) => {
      if (typeof item === "string") {
        selectOptions.push({
          label: item,
          value: item,
        });
      } else {
        selectOptions.push({
          label: item.label,
          value: item.value,
        });
      }
    });
  } else if (options) {
    Object.keys(options).forEach((key: string) => {
      selectOptions.push({
        label: options[key],
        value: key,
      });
    });
  }
  return selectOptions;
};
